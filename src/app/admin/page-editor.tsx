'use client';

import { useState, useEffect } from 'react';
import { useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Page } from '@/lib/types';
import { format } from 'date-fns';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { updatePageContent } from '@/lib/actions';

export function PageEditor() {
    const { firestore, user } = useFirebase();
    const { toast } = useToast();
    
    const [pages, setPages] = useState<Page[]>([]);
    const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
    const [selectedPage, setSelectedPage] = useState<Page | null>(null);
    const [content, setContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const pagesQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'pages') : null), [firestore]);
    const { data: pageData, isLoading: isLoadingPages } = useCollection<Page>(pagesQuery);

    useEffect(() => {
        if (pageData) {
            setPages(pageData);
            if (!selectedPageId && pageData.length > 0) {
                setSelectedPageId(pageData[0].id);
            }
            setIsLoading(false);
        }
    }, [pageData, selectedPageId]);

    useEffect(() => {
        if (selectedPageId) {
            const page = pages.find(p => p.id === selectedPageId);
            if (page) {
                setSelectedPage(page);
                setContent(page.content);
            }
        }
    }, [selectedPageId, pages]);

    const handleSave = async () => {
        if (!selectedPage || !firestore) return;
        
        setIsSaving(true);
        const updatedPageData: Page = {
            ...selectedPage,
            content: content,
            updatedAt: new Date().toISOString()
        };

        // Use the server action to update the page and revalidate
        const result = await updatePageContent(updatedPageData);

        if (result.success) {
            toast({ title: 'Page Updated', description: `The "${selectedPage.title}" page has been saved.` });
        } else {
            toast({ variant: 'destructive', title: 'Update Failed', description: result.error || "An unexpected error occurred." });
        }
        
        setIsSaving(false);
    };

    if (isLoading || isLoadingPages) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Edit Page Content</CardTitle>
                    <CardDescription>Select a page to edit its content.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                </CardContent>
            </Card>
        );
    }
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Page Content Editor</CardTitle>
                <CardDescription>Select a page to manage its content using Markdown.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <Select onValueChange={setSelectedPageId} value={selectedPageId || ''}>
                    <SelectTrigger className="w-full max-w-sm">
                        <SelectValue placeholder="Select a page to edit" />
                    </SelectTrigger>
                    <SelectContent>
                        {pages.map(page => (
                            <SelectItem key={page.id} value={page.id}>
                                {page.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {selectedPage && (
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-xl text-foreground">Editing: <span className="text-primary">{selectedPage.title}</span></h3>
                        <Textarea 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={20}
                            className="font-mono text-sm"
                            placeholder="Enter page content here. Use Markdown for formatting."
                        />
                        <div className="flex justify-between items-center">
                            <Button onClick={handleSave} disabled={isSaving}>
                                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Save Content
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                Last updated: {format(new Date(selectedPage.updatedAt), "MMMM dd, yyyy 'at' hh:mm a")}
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

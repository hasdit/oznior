'use client';
import { User, onAuthStateChanged, Auth } from 'firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';

import { useFirebase } from '@/firebase/provider';
import type { User as UserProfile} from '@/lib/types';
import { doc, getDoc } from 'firebase/firestore';

export interface UserData {
  user: User | null;
  profile: UserProfile | null;
  isUserLoading: boolean;
}

export const UserContext = createContext<Partial<UserData>>({
  user: undefined,
  profile: undefined,
  isUserLoading: true,
});

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return useFirebase();
};

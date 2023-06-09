import Link from 'next/link';
import { Suspense } from 'react';

import Repo from '@/app/components/Repo';
import RepoDir from '@/app/components/RepoDir';


const RepoPage = ({ params: {name}}) => {
    return (
      <div className='card'>
        <Link href='/code/repos' className='btn btn-back'>
          Back To Repositories
        </Link>

        <Suspense fallback={<div>Loading Repo...</div>}>
            <Repo name={name} />
        </Suspense>
        
        <Suspense fallback={<div>Loading Directories...</div>}>
            <RepoDir name={name} />
        </Suspense>
        
      </div>
    );
  };
  export default RepoPage;
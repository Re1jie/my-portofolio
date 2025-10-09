import React from 'react';
import { Clock } from 'lucide-react';

const ArticleList = () => {
    return (
        <section className="min-h-[94vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#3b4252] px-4 text-center gap-4">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse">
                <Clock size={48} className="text-white" />
            </div>
            <h1 className="font-extrabold text-6xl text-gray-900 dark:text-white">
                Coming Soon!
            </h1>
            <p className="max-w-md text-lg text-gray-700 dark:text-gray-300">
                This section is under construction. Stay tuned for content updates!
            </p>
        </section>
    );
};

export default ArticleList;


import React from 'react';
import { ViatrisLogo } from './ui/Icons';

const Footer = () => {
    return (
        <footer className="bg-black/30 mt-24">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <ViatrisLogo className="h-10 w-auto text-gray-400 mx-auto mb-8" />
                <p className="text-xs max-w-3xl mx-auto">
                    For internal use, education and training purposes only. Do not duplicate, distribute or use when detailing. This document contains confidential and proprietary information of Viatris Inc. Unauthorized use, duplication, dissemination or disclosure to third parties is strictly prohibited. © 2024 Viatris Inc. All Rights Reserved.
                </p>
               
            </div>
        </footer>
    );
};

export default Footer;
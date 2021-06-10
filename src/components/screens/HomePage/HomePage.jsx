import React from 'react';
import './HomePage.css';
import { PageHeader } from '../PageHeader/PageHeader.jsx';
import { PageContent } from '../PageContent/PageContent.jsx';
import { PageFooter } from '../PageFooter/PageFooter.jsx';

export const HomePage = () => {

    return <>
    <PageHeader></PageHeader>
    <PageContent></PageContent>
    <PageFooter></PageFooter>
    </>
}


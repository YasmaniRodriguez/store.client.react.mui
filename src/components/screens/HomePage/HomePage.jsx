import React from 'react';
import './HomePage.css';
import { PageHeader } from '../../widgets/PageHeader/PageHeader.jsx';
import { PageContent } from '../../widgets/PageContent/PageContent.jsx';
import { PageFooter } from '../../widgets/PageFooter/PageFooter.jsx';

export const HomePage = () => {

    return <>
    <PageHeader></PageHeader>
    <PageContent></PageContent>
    <PageFooter></PageFooter>
    </>
}


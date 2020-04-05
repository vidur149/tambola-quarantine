import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { PageContainer } from "../styles/page-layout.styles";

export const PageLayout = ({
  children,
  pageTitle,
}: {
  children?: React.ReactNode;
  pageTitle?: string;
}) => {
  return (
    <>
      <Head>
        <title>TAMBOLA APP FOR QUARANTINE | {pageTitle}</title>
      </Head>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

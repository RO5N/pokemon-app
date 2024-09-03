import { FC } from 'react';

interface PageLayoutProps {
  title: string;
  description: string;
}

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  description,
}) => {
  return (
    <>
        <title id="title">{title}</title>
        <meta name="description" content={description}/>
    </>
  );
};

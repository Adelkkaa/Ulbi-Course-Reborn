import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './VirtualArticleList.module.scss';
import { Article } from '../../model/types/article';
import { PAGE_ID } from '@/widgets/Page/Page';
import { ArticleView } from '../../model/consts/articleConsts';

interface VirtualArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) => (
    <ArticleListItemSkeleton className={cls.card} view={view} />
);

export const VirtualArticleList = memo((props: VirtualArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (view === ArticleView.BIG) {
        return (
            <Virtuoso
                style={{ height: '700px' }}
                totalCount={isLoading ? articles.length + 3 : articles.length}
                customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
                itemContent={(index) => (isLoading && index >= articles.length
                    ? getSkeleton(view)
                    : renderArticle(articles[index]))}
                className={classNames(cls.VirtualArticleList, {}, [
                    className,
                    cls[view],
                ])}
            />
        );
    }

    return (
        <VirtuosoGrid
            style={{ height: 320 }}
            totalCount={isLoading ? articles.length + 9 : articles.length}
            customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
            itemContent={(index) => (isLoading && index >= articles.length
                ? getSkeleton(view)
                : renderArticle(articles[index]))}
            listClassName={classNames(cls.VirtualArticleList, {}, [
                className,
                cls[view],
            ])}
        />
    );
});

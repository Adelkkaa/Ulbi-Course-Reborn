// import { HTMLAttributeAnchorTarget, memo } from 'react';
// import { Virtuoso } from 'react-virtuoso';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
// import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
// import cls from './VirtualArticleList.module.scss';
// import { Article, ArticleView } from '../../model/types/article';

// interface VirtualArticleListProps {
//   className?: string;
//   articles: Article[];
//   isLoading?: boolean;
//   view?: ArticleView;
//   target?: HTMLAttributeAnchorTarget;
// }

// const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
//     .fill(0)
//     .map((item, index) => (
//         <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
//     ));

// export const VirtualArticleList = memo((props: VirtualArticleListProps) => {
//     const {
//         className,
//         articles,
//         view = ArticleView.SMALL,
//         isLoading,
//         target,
//     } = props;

//     const renderArticle = (article: Article) => (
//         <ArticleListItem
//             article={article}
//             view={view}
//             className={cls.card}
//             key={article.id}
//             target={target}
//         />
//     );

//     if (view === ArticleView.BIG) {
//         return (
//             <Virtuoso
//                 style={{ height: '700px' }}
//                 totalCount={articles.length}
//                 // eslint-disable-next-line react/no-unstable-nested-components
//                 itemContent={(index) => (
//                     renderArticle(articles[index]))}
//             />
//         );
//     }

//     return (
//         <div
//             className={classNames(cls.VirtualArticleList, {}, [className, cls[view]])}
//         >
//             {articles.length > 0 ? articles.map(renderArticle) : null}
//             {isLoading && getSkeletons(view)}
//         </div>
//     );
// });

export const VirtualArticleList = () => (
    <div />
);

import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from '@/shared/types/sort';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;

     // filters
     view: ArticleView;
     order: SortOrder;
     sort: ArticleSortField;
     search: string;
     type: ArticleType;
}

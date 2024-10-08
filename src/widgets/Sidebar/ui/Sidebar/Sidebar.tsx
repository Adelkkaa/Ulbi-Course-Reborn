import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button } from 'shared/ui';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}
export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </aside>
    );
};

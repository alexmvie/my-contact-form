import styles from './form-row.module.scss';
import classNames from 'classnames';

export interface FormRowProps {
    className?: string;
     children?: JSX.Element | Array<JSX.Element>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-form-rows-and-templates
 */
export const FormRow = ({ className, children }: FormRowProps) => {
    return (
        <div className={classNames(styles.root, className, styles['c-formrow'])}>
            {children}
        </div>
    );
};

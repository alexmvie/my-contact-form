import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <form className={styles['c-form']}>
                <div className={styles['c-formheader']}>
                    <h1>Contact Us</h1>
                    <p>
                        Have a question? Fill out the form below and we'll get back to you as soon a
                        we can.
                    </p>
                </div>
                <FormRow>
                    <Label htmlFor={'name'}>
                        Name
                        <Input id="name" name={'name'} />
                    </Label>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>
                        eMail
                        <Input id={'email'} name={'email'} />
                    </Label>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'message'}>
                        Message
                        <Input />
                    </Label>
                </FormRow>
                <FormRow>
                    <SubmitButton>SUBMIT</SubmitButton>
                </FormRow>
            </form>
        </div>
    );
}

export default App;

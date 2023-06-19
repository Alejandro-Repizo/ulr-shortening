import css from './Form.module.css'

export default function Form () {
    return (
        <aside className={css['content']}>
            <form className={css['form']}>
                <label>
                    <span className={css['sr-only']}>Put your link that you would like to short.</span>
                    <input type="text" placeholder="Shorten link here..." />
                    <button className="button button--big button--square" type="submit">Shorten it!</button>
                </label>
            </form>
        </aside>
    )

}
import React from 'react'

export default function Form () {
    return (
        <section>
            <form>
                <label>
                    <span>Put your link that you would like to short.</span>
                    <input type="text" placeholder="Shorten link here" />
                    <button type="submit">Shorten it!</button>
                </label>
            </form>
        </section>
    )

}
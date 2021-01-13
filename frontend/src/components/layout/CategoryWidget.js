import React from 'react'

export default function CategoryWidget() {
    return (
        <div className="category-widget">
            <div className="category-widget-row">
                <div className="category-widget-col" id="birthdays">
                            <a href={`/Category/Birthday`}>
                            <img className="category-widget-image" src='https://i.imgur.com/5JJtq19.jpg' />
                            <h2 className="category-widget-description">Birthdays</h2>
                            </a>
                </div>
                <div className="category-widget-col" id="birthdays">
                            <a href={`/Category/Holidays`}>
                            <img className="category-widget-image" src='https://i.imgur.com/VklIOQ4.jpg' />
                            <h2 className="category-widget-description">Holidays</h2>
                            </a>
                </div>
                <div className="category-widget-col" id="birthdays">
                            <a href={`/Category/Special`}>
                            <img className="category-widget-image" src='https://i.imgur.com/w0yqdZI.jpg' />
                            <h2 className="category-widget-description">Special</h2>
                            </a>
                </div>
                <div className="category-widget-col" id="birthdays">
                            <a href={`/Menu`}>
                            <img className="category-widget-image" src='https://i.imgur.com/tmqtzDd.jpeg' />
                            <h2 className="category-widget-description">Catalog</h2>
                            </a>
                </div>
            </div>
        </div>
    )
}

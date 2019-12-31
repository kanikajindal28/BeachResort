import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
function Error() {
    return (
        <Hero >
            <Banner title="ERROR 404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    Back to Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error

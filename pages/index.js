import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const mainRoot = () => (
    <div>
        <h1>This is the main page</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Click to Auth</button>
    </div>
);
export default mainRoot;
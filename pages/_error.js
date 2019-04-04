import React from 'react';
import Link from 'next/link'

const authPage = () => (
    <div>
        <h1>Oops something went wrong..!</h1>
        <p>try to <Link href="/"><a>Go back</a></Link></p>
    </div>
);
export default authPage;
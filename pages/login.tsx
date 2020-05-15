import React from 'react';
import { Layout, Button } from '../components';
import Card from '../components/Card';
import { TextBox } from '../components/Form';

const LoginPage = () => (
    <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Card maxWidth="339px" maxHeight="426px" styles={{ margin: '0 auto' }}>
            <img src="/padded-box-logo.svg" alt="Symphony Logo" style={{ marginBottom: '24px' }} />
            <form>
                <TextBox label="Username" placeholder="john.doe" style={{ marginBottom: '16px' }} />
                <TextBox label="Password" type="password" style={{ marginBottom: '16px' }} />
                <Button value="Log in" link="/" />
            </form>
        </Card>
    </Layout>
);

export default LoginPage;
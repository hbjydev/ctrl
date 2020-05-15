import React from 'react';
import { Button, Base, Card, TextBox, Row, Column, Link } from '../components';

const LoginPage = () => (
    <Base style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Card maxWidth="339px" styles={{ margin: '0 auto' }}>
            <img src="/padded-box-logo.svg" alt="Symphony Logo" style={{ marginBottom: '24px' }} />
            <form>
                <TextBox label="Username" placeholder="john.doe" style={{ marginBottom: '16px' }} />
                <TextBox label="Password" type="password" style={{ marginBottom: '16px' }} />
                <Row pad style={{ marginBottom: '16px', fontSize: '13px' }}>
                    <Column>
                        <Row>
                            <input type="checkbox" style={{ margin: '0 6px 0 0', height: '14px', width: '14px' }} id="remember_me_field" />
                            <label htmlFor="remember_me_field">Remember me</label>
                        </Row>
                    </Column>
                    <Column>
                        <Link href="/" style={{ textAlign: 'right' }}>Forgot your password?</Link>
                    </Column>
                </Row>
                <Button value="Log in" link="/" />
            </form>
        </Card>
    </Base>
);

export default LoginPage;
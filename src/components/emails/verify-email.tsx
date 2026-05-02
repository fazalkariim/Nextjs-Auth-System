import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface verifiEmailProps {
    username:string,
    verifyURL:string,
    userEmail:string
}


const EmailVerification = ({username,verifyURL,userEmail}:verifiEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white rounded-lg p-8 max-w-150 mx-auto">
            {/* Header */}
            <Section className="text-center mb-8">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-2">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We need to verify your email address to complete your account setup
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Hi {username},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Thanks for signing up! To get started, please verify your email address by clicking the button below:
              </Text>
              <Text className="text-[14px] text-gray-600 mb-6 m-0">
                Email: <strong>{username}</strong>
              </Text>
            </Section>

            {/* Verify Button */}
            <Section className="text-center mb-8">
              <Button
                href={verifyURL}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-8">
              <Text className="text-[14px] text-gray-600 mb-2 m-0">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                {verifyURL}
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-4 rounded-lg mb-8">
              <Text className="text-[14px] text-gray-700 mb-2 m-0">
                <strong>Security Notice:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                This verification link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-6">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-2">
                Need help? Contact our support team at support@example.com
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-2">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2026 Your Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default EmailVerification;
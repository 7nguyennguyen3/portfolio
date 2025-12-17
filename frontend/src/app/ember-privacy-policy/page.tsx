"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Users,
  FileText,
  Mail,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EmberPrivacyPolicyPage = () => {
  return (
    <div className="scroll-mt-20">
      <MaxWidthWrapper className="py-20 md:py-24 space-y-12 md:space-y-16">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Ember Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Last Updated: December 16, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="w-6 h-6 text-primary" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to <strong>Ember</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how our application handles your data and assures you that we do not collect personal information for our own use.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Data Collection */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Database className="w-6 h-6 text-primary" />
                Data Collection and Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Personal Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Ember application <strong>does not</strong> require you to create an account, log in, or provide any personal contact information (such as your name, email address, or phone number). All core functionality, including focus timers and challenge tracking, runs locally on your device.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Financial Data & In-App Purchases</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Our application offers optional in-app purchases (such as visual themes) to enhance your experience. We use <strong>RevenueCat</strong> to manage these transactions in conjunction with the <strong>Google Play Store</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  While we do not store your credit card or banking details, RevenueCat and Google Play collect the following data to process your purchase and unlock features:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                  <li>
                    <strong>Purchase History:</strong> To validate receipts, restore purchases if you reinstall the app, and provide us with anonymous sales analytics.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Third-Party Services */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ExternalLink className="w-6 h-6 text-primary" />
                Third-Party Service Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the following third-party services to ensure the app functions correctly. These providers have their own privacy policies addressing how they handle data:
              </p>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-semibold mb-2">RevenueCat</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Used for managing in-app subscription and purchase infrastructure.
                  </p>
                  <Link
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    RevenueCat Privacy Policy
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-semibold mb-2">Google Play Services</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Used for processing payments and distributing the app.
                  </p>
                  <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Google Privacy Policy
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Data Safety & Children's Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="w-6 h-6 text-primary" />
                  Data Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  In compliance with Google Play&apos;s Data Safety standards, we disclose that <strong>Purchase History</strong> is collected by our service provider (RevenueCat) for the purposes of <strong>App Functionality</strong> and <strong>Analytics</strong>. This data is encrypted in transit.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  Children&apos;s Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our application does not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Changes & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
                </p>
                <Link
                  href="mailto:jimmy@insightscrucible.com"
                  className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  jimmy@insightscrucible.com
                </Link>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default EmberPrivacyPolicyPage;

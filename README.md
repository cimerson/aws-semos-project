# React + Vite - Hosted on AWS S3 with CloudFront

This project represents a real-world static website hosted on Amazon Web Services (AWS) for global accessibility and performance. It utilizes Amazon S3 for storage and Amazon CloudFront as a Content Delivery Network (CDN).

## Hosting and Distribution Architecture

This project leverages the following AWS services for hosting and global distribution:

* **Amazon S3 (Simple Storage Service):** The static website files are stored in a highly available and scalable S3 bucket. The bucket is configured for static website hosting, allowing direct access to the content via HTTP(S).
* **Amazon CloudFront:** A fast content delivery network service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. CloudFront caches the website content from the S3 bucket at edge locations around the world, ensuring faster load times for users regardless of their location.

## CloudFront Distribution Link

The globally accessible URL for this website, served through the CloudFront distribution, is:

**https://d3t05tcw709dhl.cloudfront.net/**

You can access the live website using the link above.

## Technologies Used

* **React**
* **AWS S3:** For static website hosting and storage.
* **AWS CloudFront:** For global content delivery and caching.

## Deployment Process

This project utilizes a GitHub Workflow to automate the deployment of the built website to the Amazon S3 bucket. The workflow is triggered on every push to the `main` branch.

The workflow performs the following steps:

1.  **Build:** The React Vite project is built, generating the static assets in the `dist` directory.
2.  **Upload to S3:** The contents of the `dist` directory are then automatically uploaded to the configured Amazon S3 bucket.

CloudFront is configured to use this S3 bucket as its origin. When a user requests the website, CloudFront serves the content from its edge caches if available. If not, it fetches the content from the S3 bucket. This automated process ensures that any changes pushed to the repository are efficiently built and deployed to the live website.

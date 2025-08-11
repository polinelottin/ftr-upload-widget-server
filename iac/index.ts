import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("primeiro-bucket", { // pulumi resource name
  bucket: 'plnlttn-primeiro-bucket-pos-rocketseat', // aws resource name
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: 'plnlttn-primeiro-ecr-pos-rocketseat',
  imageTagMutability: 'IMMUTABLE',
  tags: {
      IAC: "true",
  }
});

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;

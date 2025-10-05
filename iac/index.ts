import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("primeiro-bucket", {
    bucket: 'plnlttn-bucket-pos-full-stack-360',
    tags: {
        IAC: "true",
    },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
    name: 'plnlttn-primeiro-ecr',
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

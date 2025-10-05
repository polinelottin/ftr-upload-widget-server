import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("teste-pos-rocketseat", {
    bucket: 'teste-pos-rocketseat',
    tags: {
        IAC: "true",
    },
});

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

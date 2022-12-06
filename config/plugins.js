// module.exports = ({ env }) => ({
//   "users-permissions": {
//     config: {
//       jwt: {
//         expiresIn: "7d",
//       },
//       jwtSecret: "6L8rspWDoF1BCdNCtNV0FA==",
//       adminJwtSecret: "lOm9YKvmoxIIVbOc/6neRw==",
//       apiTokenSalt: "64RxhtQU3D0cR3l+GWO5fw==",
//     },
//   },
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
//   toolbar: {
//       items: [
//           "heading",
//           "|",
//           "bold",
//           "italic",
//           "link",
//           "alignment",
//           "|",
//           "undo",
//           "redo",
//       ],
//   },
// });


// path: ./config/plugins.js

// module.exports = ({ env })=>({
//   upload: {
//     config: {
//       providerOptions: {
//         localServer: {
//           maxage: 300000
//         },
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
            Bucket: env('AWS_BUCKET_NAME'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});

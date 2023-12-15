import { makeSource, defineDocumentType } from '@contentlayer/source-files';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
    },
    images: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    para: {
      type: 'string',
    },
    desc: {
      type: 'string',
    },
  },
  computedFields: {
    url_path: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: 'content',
  documentTypes: [Doc],
});

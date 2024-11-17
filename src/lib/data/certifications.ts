export type CertType = {
  txTitle: string;
  txIssuer: string;
  url: string;
  img: string;
  date: Date;
}

const txAwsIssuer = 'certs.aws.issuer';
export const certifications: CertType[] = [
  {
    txTitle: 'certs.comptia.linux.title',
    txIssuer: 'certs.comptia.issuer',
    url: "https://www.credly.com/badges/8adb6159-a664-4fb9-be3b-f1a2afd5e2fd/embedded",
    img: "https://comptiacdn.azureedge.net/webcontent/images/default-source/siteicons/logolinuxplus.svg?sfvrsn=a1b030a_10",
    date: new Date('2024-11-02')
  },
  {
    txTitle: 'certs.aws.cda.title',
    txIssuer: txAwsIssuer,
    url: "https://www.credly.com/badges/97043d89-6dc6-4149-99f1-e7461ed3b7fb/embedded",
    img: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    date: new Date('2023-03-29')
  },
  {
    txTitle: 'certs.aws.csa.title',
    txIssuer: txAwsIssuer,
    url: "https://www.credly.com/badges/0b3f67f8-d1c1-4d3a-b314-fbdf5442bb0b/embedded",
    img: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
    date: new Date('2023-07-04')
  },
  {
    txTitle: 'certs.aws.saa.title',
    txIssuer: txAwsIssuer,
    url: "https://www.credly.com/badges/86b9f0fe-9fdb-405e-94bd-305a2561e09e/embedded",
    img: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    date: new Date('2022-12-13')
  },
  {
    txTitle: 'certs.aws.cp.title',
    txIssuer: txAwsIssuer,
    url: "https://www.credly.com/badges/ab7d7abe-4055-4a4e-8a59-9e5f099b4f45/embedded",
    img: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    date: new Date('2022-09-12')
  },
]


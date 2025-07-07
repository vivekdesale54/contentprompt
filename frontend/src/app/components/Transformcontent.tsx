type ContentProps = {
  content: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
};
const  TransformedContentSocial = ({ content }: ContentProps) => {
  if (!content.linkedin && !content.instagram && !content.twitter) return null;

  return (
    <div className="mt-10 space-y-4 text-left max-w-xl mx-auto">
      {content.linkedin && (
        <div>
          <h3 className="font-semibold">LinkedIn:</h3>
          <p className="bg-gray-100 p-3 rounded">{content.linkedin}</p>
        </div>
      )}
      {content.instagram && (
        <div>
          <h3 className="font-semibold">Instagram:</h3>
          <p className="bg-gray-100 p-3 rounded">{content.instagram}</p>
        </div>
      )};
      {content.twitter && (
        <div>
          <h3 className="font-semibold">Twitter:</h3>
          <p className="bg-gray-100 p-3 rounded">{content.twitter}</p>
        </div>
      )};
    </div>
  );
}


export default TransformedContentSocial;
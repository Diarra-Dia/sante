

interface ArticleCardProps {
  title: string;
  content: string;
}

export default function ArticleCard({ title, content,}: ArticleCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
}
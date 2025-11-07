import React from 'react';
import { Globe, BookOpen } from 'lucide-react';

const PublicationCard = ({ publication }) => {
  const doiUrl = `https://doi.org/${publication.doi}`;

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700/50">
      <div className="flex items-start mb-3">
        <BookOpen className="text-accent-color mr-3 mt-1 flex-shrink-0" size={20} />
        <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
          {publication.title}
        </h3>
      </div>

      <p className="text-sm text-gray-400 italic mb-2 ml-7">{publication.journal}</p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center ml-7 mt-3 text-xs sm:text-sm">
        <span className="text-gray-500 font-medium mb-2 sm:mb-0">
          Published: {publication.date}
        </span>

        {publication.doi && (
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-accent-color hover:text-white transition hover:underline"
            title={`View DOI: ${publication.doi}`}
          >
            <Globe size={14} className="flex-shrink-0" />
            <span className="truncate max-w-[150px] sm:max-w-full">{publication.doi}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;
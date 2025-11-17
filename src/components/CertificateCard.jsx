import React from 'react'
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

const CertificateCard = ({ item }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)]">
            <img src={item.img} alt={item.title} className='w-full overflow-hidden object-contain p-2 border-t border-gray-300 dark:border-gray-700 rounded-t-xl'></img>
            <div className="relative flex items-start gap-4 px-6 py-4 pt-2">
                {/* Badge Image (if available) */}
                {item.badge && (
                    <img
                        src={item.badge}
                        alt="Badge"
                        className="absolute -top-8 right-0 h-16 md:h-20 lg:h-24"
                    />
                )}

                <div className=" flex-1">
                    <h2 className="text-xl font-extrabold text-purple-500">{item.title}</h2>
                    <p className="font-bold text-gray-700 dark:text-gray-300 mt-1 flex items-center gap-2">
                        <MdSchool /> {item.issuer}
                    </p>

                    <p className="font-semibold text-gray-600 dark:text-gray-400 my-2 text-sm flex items-center gap-2">
                        <FaCalendarAlt /> {item.from} → {item.to} ({item.duration})
                    </p>

                    <span className="text-sm font-semibold mt-1 px-2 py-1 bg-purple-600 rounded-md inline-block">
                        {item.mode}
                    </span>

                    <div className="mt-4 flex gap-3 flex-wrap justify-end">
                        {/* View Certificate */}
                        <a
                            href={item.url}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 font-bold dark:text-white border border-purple-600 rounded-lg hover:text-purple-500 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                        >
                            View Certificate
                            <FaExternalLinkAlt size={14} />
                        </a>

                        {/* Proof / Badge */}
                        {item.proof && (
                            <a
                                href={item.proof}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 border border-purple-600 font-bold rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                            >
                                Proof
                                <FaExternalLinkAlt size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard

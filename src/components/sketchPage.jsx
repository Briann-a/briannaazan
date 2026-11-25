/* new page that will slide up after each interactive desk item clicked */

const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src || '');

function Media({ src, alt = '', className = '' }) {
    if (isVideo(src)) {
        return (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className={className}
            />
        );
    }

    return <img src={src} alt={alt} className={className} />;
}

function Gallery({ gallery, layout }) {
    if (!gallery?.length) return null;

    const layoutClass = layout === 'row'
        ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'
        : layout === 'grid-3'
            ? 'grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5'
            : 'flex flex-wrap sm:flex-nowrap items-center';
    const mediaClass = layout === 'grid-3'
        ? 'aspect-square'
        : layout === 'row'
            ? 'aspect-video'
            : 'h-28 md:h-36';

    return (
        <div className={`mx-auto mt-6 w-full max-w-3xl ${layoutClass}`}>
            {gallery.map((media, index) => ( /* return one wrapper per book image */
                <div key={`${media.src}-${index}`}>
                    {/* mx-auto: center in grid column
                        max-w-[14rem]: max out each book cover width image */}
                    <div className={`mx-auto w-full max-w-[14rem] overflow-hidden sketch-icon-frame bg-transparent ${mediaClass}`}>
                        {/* render image/video */}
                        <Media
                            src={media.src}
                            alt={media.alt || ''}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* caption rating */}
                    {media.caption && (
                        <p className="font-title mt-2 text-center text-2xl md: text-3xltext-base">
                            {media.caption} {/* caption content */}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export function SketchPage({ pageData, onClose }) {
    if (!pageData) return null;

    return (
        <div className="sketch-page-overlay">
            <div className="sketch-page-content">
                <div className="sketch-page-close-row">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="return to desk"
                        className="sketch-btn boil-item w-12 h-12 md:w-14 md:h-14 flex items-center justify-center cursor-pointer text-6xl"
                    >
                        X
                    </button>
                </div>

                <main className="sketch-page-body">
                <header className="mb-12 border-b-2 border-dashed border-stone-400 pb-6">
                    <h1 className="break-words text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
                        {pageData.title}
                    </h1>
                    {pageData.subtitle && (
                        <p className="mt-4 text-2xl leading-relaxed md:text-3xl text-stone-600">
                            {pageData.subtitle}
                        </p>
                    )}
                </header>

                {pageData.image && (
                    <div className="mx-auto mb-12 flex h-[min(70vh,40rem)] w-full max-w-3xl items-center justify-center overflow-hidden sketch-icon-frame">
                        <Media
                            src={pageData.image}
                            alt={pageData.title}
                            style={{
                                width: pageData.imageWidth || undefined,
                                maxWidth: '100%',
                                marginTop: pageData.imageMarginTop || undefined,
                            }}
                            className="h-auto object-contain"
                        />
                    </div>
                )}

                <div className="flex flex-col space-y-20">
                    {(pageData.items || []).map((item, index) => (
                        <article
                            key={`${item.name || 'item'}-${index}`}
                            className={`flex w-full flex-col gap-3 ${
                                item.image
                                    ? 'mx-auto max-w-xl items-start text-left'
                                    : 'items-center text-center'
                            }`}
                        >
                            {item.image && (
                                <div className="mb-3 aspect-video w-full overflow-hidden rounded-xl sketch-icon-frame">
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            title={`Open ${item.name}`}
                                            className="block h-full w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                                        >
                                            <Media
                                                src={item.image}
                                                alt={item.name || ''}
                                                className="w-full h-full object-cover"
                                            />
                                        </a>
                                    ) : (
                                        <Media
                                            src={item.image}
                                            alt={item.name || ''}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            )}

                            {(item.name || item.tag) && (
                                <>
                                    {item.name && (
                                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                                            {item.name}
                                        </h2>
                                    )}
                                    {item.tag && (
                                        <p className="text-lg md:text-xl tracking-wide text-stone-500">
                                            {item.tag}
                                        </p>
                                    )}
                                </>
                            )}

                            {item.description && (
                                <p className="mt-1 max-w-3xl text-xl md:text-4xl leading-relaxed text-stone-700">
                                    {item.description}
                                </p>
                            )}

                            {item.bullets && (
                                <ul className="mt-2 list-disc space-y-3 pl-6 text-left text-xl md:text-2xl leading-relaxed text-stone-700">
                                    {item.bullets.map((bullet, bulletIndex) => (
                                        <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            <Gallery gallery={item.gallery} layout={item.galleryLayout} />
                        </article>
                    ))}
                </div>

                <Gallery gallery={pageData.gallery} layout={pageData.galleryLayout} />
                </main>
            </div>
        </div>
    );
}

/**
 * Main Application Logic for SCW2 Mods Showcase
 */

class ModsApp {
    constructor() {
        this.elements = {
            searchInput: document.getElementById('searchInput'),
            filtersContainer: document.getElementById('filtersContainer'),
            modsGrid: document.getElementById('modsGrid'),
            sortSelect: document.getElementById('sortSelect'),
            resetFilters: document.getElementById('resetFilters'),
            noResults: document.getElementById('noResults'),
            modal: document.getElementById('modModal'),
            modalBody: document.getElementById('modalBody'),
            modalBackdrop: document.getElementById('modalBackdrop'),
            modalClose: document.getElementById('modalClose'),
            totalMods: document.getElementById('totalMods'),
            categoriesCount: document.getElementById('categoriesCount'),
            lastUpdate: document.getElementById('lastUpdate')
        };

        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        // Load data
        await modsManager.loadData();

        // Update stats
        this.updateStats();

        // Render filters
        this.renderFilters();

        // Render mods grid
        this.renderModsGrid();

        // Setup event listeners
        this.setupEventListeners();

        // Apply URL parameters
        this.applyURLParams();

        // Initialize lazy loading
        lazyLoadImages();
    }

    /**
     * Update stats bar
     */
    updateStats() {
        const stats = modsManager.getStats();
        this.elements.totalMods.textContent = stats.totalMods;
        this.elements.categoriesCount.textContent = stats.categoriesCount;
        this.elements.lastUpdate.textContent = formatDate(stats.lastUpdate);
    }

    /**
     * Render category filters
     */
    renderFilters() {
        const categories = modsManager.getCategories();
        const filtersHTML = categories.map(category => `
            <button
                class="filter-btn"
                data-category="${category.id}"
                aria-label="Filtrer par ${category.name}"
            >
                <span class="filter-btn-icon">${category.icon}</span>
                <span>${category.name}</span>
            </button>
        `).join('');

        this.elements.filtersContainer.innerHTML = filtersHTML;
    }

    /**
     * Render mods grid
     */
    renderModsGrid() {
        const mods = modsManager.getFilteredMods();

        if (mods.length === 0) {
            this.elements.modsGrid.style.display = 'none';
            this.elements.noResults.style.display = 'block';
            return;
        }

        this.elements.modsGrid.style.display = 'grid';
        this.elements.noResults.style.display = 'none';

        const modsHTML = mods.map(mod => this.createModCard(mod)).join('');
        this.elements.modsGrid.innerHTML = modsHTML;

        // Re-initialize lazy loading for new images
        lazyLoadImages();
    }

    /**
     * Create a mod card HTML
     * @param {Object} mod - Mod data
     * @returns {string} HTML string
     */
    createModCard(mod) {
        const categoryIcon = getCategoryIcon(mod.category, modsManager.getCategories());
        const statusClass = `mod-status-${mod.status}`;
        const statusLabel = getStatusLabel(mod.status);

        return `
            <article class="mod-card" data-mod-id="${mod.id}" role="button" tabindex="0">
                <div class="mod-card-image">
                    ${mod.media.screenshots && mod.media.screenshots[0]
                        ? `<img src="assets/images/mods/${mod.media.screenshots[0]}" alt="${sanitizeHTML(mod.name)}" loading="lazy" />`
                        : `<div class="mod-card-image-placeholder">${categoryIcon}</div>`
                    }
                    <span class="mod-status-badge ${statusClass}">${statusLabel}</span>
                </div>
                <div class="mod-card-content">
                    <header class="mod-card-header">
                        <h3 class="mod-card-title">${sanitizeHTML(mod.name)}</h3>
                        <div class="mod-card-meta">
                            <span class="mod-card-meta-item">
                                <span>👤</span>
                                <span>${sanitizeHTML(mod.author)}</span>
                            </span>
                            <span class="mod-card-meta-item">
                                <span>📦</span>
                                <span>v${sanitizeHTML(mod.version)}</span>
                            </span>
                        </div>
                    </header>
                    <p class="mod-card-description">${sanitizeHTML(truncateText(mod.description, 120))}</p>
                    <div class="mod-card-tags">
                        ${mod.tags.slice(0, 3).map(tag =>
                            `<span class="mod-tag">${sanitizeHTML(tag)}</span>`
                        ).join('')}
                    </div>
                    <footer class="mod-card-footer">
                        <div class="mod-card-stats">
                            <span class="mod-card-stat">
                                <span>⬇️</span>
                                <span>${formatNumber(mod.stats.downloads)}</span>
                            </span>
                            <span class="mod-card-stat">
                                <span>⭐</span>
                                <span>${mod.stats.stars}</span>
                            </span>
                        </div>
                        <button class="mod-card-cta" aria-label="Voir les détails de ${sanitizeHTML(mod.name)}">
                            Détails
                        </button>
                    </footer>
                </div>
            </article>
        `;
    }

    /**
     * Open modal with mod details
     * @param {string} modId - Mod ID
     */
    openModal(modId) {
        const mod = modsManager.getModById(modId);
        if (!mod) return;

        const categoryIcon = getCategoryIcon(mod.category, modsManager.getCategories());
        const categoryName = modsManager.getCategoryName(mod.category);
        const statusLabel = getStatusLabel(mod.status);

        const modalContent = `
            <header class="modal-header">
                <h2 class="modal-title">${sanitizeHTML(mod.name)}</h2>
                <div class="modal-subtitle">
                    <span class="modal-subtitle-item">
                        <span>👤</span>
                        <span>${sanitizeHTML(mod.author)}</span>
                    </span>
                    <span class="modal-subtitle-item">
                        <span>📦</span>
                        <span>Version ${sanitizeHTML(mod.version)}</span>
                    </span>
                    <span class="modal-subtitle-item">
                        <span>${categoryIcon}</span>
                        <span>${categoryName}</span>
                    </span>
                    <span class="modal-subtitle-item">
                        <span>🏷️</span>
                        <span>${statusLabel}</span>
                    </span>
                </div>
            </header>

            <div class="modal-gallery">
                ${mod.media.screenshots && mod.media.screenshots[0]
                    ? `<img src="assets/images/mods/${mod.media.screenshots[0]}" alt="${sanitizeHTML(mod.name)}" />`
                    : `<div class="modal-gallery-placeholder">${categoryIcon}</div>`
                }
            </div>

            <section class="modal-section">
                <h3 class="modal-section-title">📝 Description</h3>
                <p class="modal-description">${sanitizeHTML(mod.longDescription)}</p>
            </section>

            ${mod.features && mod.features.length > 0 ? `
                <section class="modal-section">
                    <h3 class="modal-section-title">✨ Fonctionnalités</h3>
                    <ul class="modal-features">
                        ${mod.features.map(feature =>
                            `<li>${sanitizeHTML(feature)}</li>`
                        ).join('')}
                    </ul>
                </section>
            ` : ''}

            <section class="modal-section">
                <h3 class="modal-section-title">📊 Statistiques</h3>
                <div class="modal-stats">
                    <div class="modal-stat">
                        <span class="modal-stat-value">${formatNumber(mod.stats.downloads)}</span>
                        <span class="modal-stat-label">Téléchargements</span>
                    </div>
                    <div class="modal-stat">
                        <span class="modal-stat-value">${mod.stats.stars}</span>
                        <span class="modal-stat-label">Stars</span>
                    </div>
                    <div class="modal-stat">
                        <span class="modal-stat-value">${formatDate(mod.stats.lastUpdate)}</span>
                        <span class="modal-stat-label">Dernière MAJ</span>
                    </div>
                </div>
            </section>

            ${mod.compatibility ? `
                <section class="modal-section">
                    <h3 class="modal-section-title">🔧 Compatibilité</h3>
                    <p class="modal-description">
                        <strong>Version du jeu :</strong> ${sanitizeHTML(mod.compatibility.gameVersion)}
                    </p>
                    ${mod.installation ? `
                        <p class="modal-description">
                            <strong>Installation :</strong> ${sanitizeHTML(mod.installation)}
                        </p>
                    ` : ''}
                </section>
            ` : ''}

            <section class="modal-section">
                <h3 class="modal-section-title">🏷️ Tags</h3>
                <div class="mod-card-tags">
                    ${mod.tags.map(tag => `<span class="mod-tag">${sanitizeHTML(tag)}</span>`).join('')}
                </div>
            </section>

            <section class="modal-section">
                <h3 class="modal-section-title">🔗 Liens</h3>
                <div class="modal-links">
                    ${mod.links.download ? `
                        <a href="${mod.links.download}" target="_blank" rel="noopener" class="modal-link modal-link-primary">
                            ⬇️ Télécharger
                        </a>
                    ` : ''}
                    ${mod.links.source ? `
                        <a href="${mod.links.source}" target="_blank" rel="noopener" class="modal-link">
                            💻 Code Source
                        </a>
                    ` : ''}
                    ${mod.links.docs ? `
                        <a href="${mod.links.docs}" target="_blank" rel="noopener" class="modal-link">
                            📚 Documentation
                        </a>
                    ` : ''}
                    ${mod.links.issues ? `
                        <a href="${mod.links.issues}" target="_blank" rel="noopener" class="modal-link">
                            🐛 Signaler un Bug
                        </a>
                    ` : ''}
                </div>
            </section>
        `;

        this.elements.modalBody.innerHTML = modalContent;
        this.elements.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Update URL
        updateURL({ mod: mod.id });
    }

    /**
     * Close modal
     */
    closeModal() {
        this.elements.modal.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Update URL
        updateURL({ mod: null });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Search input
        const debouncedSearch = debounce((query) => {
            modsManager.setSearch(query);
            this.renderModsGrid();
            updateURL({ search: query || null });
        }, 300);

        this.elements.searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });

        // Category filters
        this.elements.filtersContainer.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('.filter-btn');
            if (!filterBtn) return;

            const category = filterBtn.dataset.category;

            // Toggle active state
            const isActive = filterBtn.classList.contains('active');

            // Remove active from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Set filter
            if (isActive) {
                modsManager.setFilter(null);
                updateURL({ category: null });
            } else {
                filterBtn.classList.add('active');
                modsManager.setFilter(category);
                updateURL({ category });
            }

            this.renderModsGrid();
        });

        // Sort select
        this.elements.sortSelect.addEventListener('change', (e) => {
            modsManager.setSort(e.target.value);
            this.renderModsGrid();
            updateURL({ sort: e.target.value });
        });

        // Reset filters
        this.elements.resetFilters.addEventListener('click', () => {
            modsManager.clearFilters();
            this.elements.searchInput.value = '';
            this.elements.sortSelect.value = 'name-asc';
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.renderModsGrid();
            updateURL({ category: null, search: null, sort: null, mod: null });
        });

        // Mod cards click
        this.elements.modsGrid.addEventListener('click', (e) => {
            const modCard = e.target.closest('.mod-card');
            if (!modCard) return;

            const modId = modCard.dataset.modId;
            this.openModal(modId);
        });

        // Mod cards keyboard navigation
        this.elements.modsGrid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const modCard = e.target.closest('.mod-card');
                if (!modCard) return;

                e.preventDefault();
                const modId = modCard.dataset.modId;
                this.openModal(modId);
            }
        });

        // Modal close
        this.elements.modalClose.addEventListener('click', () => {
            this.closeModal();
        });

        this.elements.modalBackdrop.addEventListener('click', () => {
            this.closeModal();
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.elements.modal.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Contribute link
        document.getElementById('contributeLink').addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://github.com/scw2mods/scw2mods.github.io/blob/main/CONTRIBUTING.md', '_blank');
        });
    }

    /**
     * Apply URL parameters on page load
     */
    applyURLParams() {
        const params = getQueryParams();

        // Apply category filter
        if (params.category) {
            modsManager.setFilter(params.category);
            const filterBtn = document.querySelector(`[data-category="${params.category}"]`);
            if (filterBtn) {
                filterBtn.classList.add('active');
            }
        }

        // Apply search
        if (params.search) {
            this.elements.searchInput.value = params.search;
            modsManager.setSearch(params.search);
        }

        // Apply sort
        if (params.sort) {
            this.elements.sortSelect.value = params.sort;
            modsManager.setSort(params.sort);
        }

        // Render with filters
        this.renderModsGrid();

        // Open modal if mod param exists
        if (params.mod) {
            this.openModal(params.mod);
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ModsApp();
});

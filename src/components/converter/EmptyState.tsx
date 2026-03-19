type EmptyStateProps = {
  onAdd: () => void;
};

export function EmptyState({ onAdd }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__text">
        <p className="empty-state__title">No currencies yet</p>
        <p className="empty-state__subtitle">Add currencies to start converting</p>
      </div>
      <button type="button" className="empty-state__btn" onClick={onAdd} aria-label="Add your first currency">
        <span className="add-currency-btn__icon" aria-hidden>+</span>
        Add currency
      </button>
    </div>
  );
}

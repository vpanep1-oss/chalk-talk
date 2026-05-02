import { useState, useEffect } from 'react';
import './GameNotes.css';

const GameNotes = () => {
  const [notes, setNotes] = useState([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    type: 'game',
    category: 'offense',
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    // Load notes from localStorage
    const savedNotes = localStorage.getItem('practiceNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const saveNotes = (updatedNotes) => {
    localStorage.setItem('practiceNotes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (!newNote.title || !newNote.content) {
      alert('Please fill in title and content');
      return;
    }

    const noteToAdd = {
      ...newNote,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    const updatedNotes = [noteToAdd, ...notes];
    saveNotes(updatedNotes);

    // Reset form
    setNewNote({
      type: 'game',
      category: 'offense',
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0]
    });
    setIsAddingNote(false);
  };

  const handleDeleteNote = (id) => {
    if (confirm('Delete this note?')) {
      const updatedNotes = notes.filter(note => note.id !== id);
      saveNotes(updatedNotes);
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      offense: '⚡',
      defense: '🛡️',
      shooting: '🎯',
      passing: '🤝',
      rebounding: '📊',
      conditioning: '💪',
      general: '📝'
    };
    return icons[category] || '📝';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="page game-notes-page">
      <div className="page-header">
        <h1 className="page-title">Notes</h1>
        <p className="page-subtitle">Track game observations and practice insights</p>
      </div>

      <button
        className="btn btn-primary add-note-btn"
        onClick={() => setIsAddingNote(!isAddingNote)}
      >
        {isAddingNote ? '✕ Cancel' : '+ New Note'}
      </button>

      {isAddingNote && (
        <div className="note-form card">
          <div className="form-row">
            <div className="form-group">
              <label>Type</label>
              <select
                value={newNote.type}
                onChange={(e) => setNewNote({ ...newNote, type: e.target.value })}
              >
                <option value="game">Game</option>
                <option value="practice">Practice</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={newNote.category}
                onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
              >
                <option value="offense">Offense</option>
                <option value="defense">Defense</option>
                <option value="shooting">Shooting</option>
                <option value="passing">Passing</option>
                <option value="rebounding">Rebounding</option>
                <option value="conditioning">Conditioning</option>
                <option value="general">General</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={newNote.date}
              onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="e.g., Great defensive effort"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              rows="5"
              placeholder="Describe what you observed..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="selectable"
            />
          </div>

          <button className="btn btn-primary" onClick={handleAddNote}>
            Save Note
          </button>
        </div>
      )}

      <div className="notes-list">
        {notes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <h3 className="empty-state-title">No notes yet</h3>
            <p className="empty-state-text">Add your first game or practice note</p>
          </div>
        ) : (
          notes.map(note => (
            <div key={note.id} className="note-card card">
              <div className="note-header">
                <div className="note-meta">
                  <span className={`note-type ${note.type}`}>{note.type}</span>
                  <span className="note-category">
                    {getCategoryIcon(note.category)} {note.category}
                  </span>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  🗑️
                </button>
              </div>

              <h3 className="note-title">{note.title}</h3>
              <p className="note-content selectable">{note.content}</p>

              <div className="note-footer">
                <span className="note-date">{formatDate(note.date)}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameNotes;

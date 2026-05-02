import { useState, useEffect } from 'react';
import { saveNote, getNotes, deleteNote, subscribeToNotes } from '../firebase/firestore';
import './GameNotes.css';

const GameNotes = () => {
  const [notes, setNotes] = useState([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('');
  const [teamCode, setTeamCode] = useState(null);
  const [newNote, setNewNote] = useState({
    type: 'game',
    category: 'offense',
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const savedTeamCode = localStorage.getItem('teamCode');
    setTeamCode(savedTeamCode);

    if (savedTeamCode) {
      // Load notes from Firebase and subscribe to changes
      loadNotesFromFirebase(savedTeamCode);

      // Set up real-time sync
      const unsubscribe = subscribeToNotes(savedTeamCode, (syncedNotes) => {
        setNotes(syncedNotes);
        setSyncStatus('✓ Synced');
        setTimeout(() => setSyncStatus(''), 2000);
      });

      return () => unsubscribe();
    } else {
      // Fall back to localStorage
      const savedNotes = localStorage.getItem('practiceNotes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }
  }, []);

  const loadNotesFromFirebase = async (code) => {
    try {
      setIsSyncing(true);
      const firebaseNotes = await getNotes(code);
      setNotes(firebaseNotes);
      setSyncStatus('✓ Loaded');
      setTimeout(() => setSyncStatus(''), 2000);
    } catch (error) {
      console.error('Error loading notes:', error);
      setSyncStatus('⚠ Error loading');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.title || !newNote.content) {
      alert('Please fill in title and content');
      return;
    }

    const noteToAdd = {
      ...newNote,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    try {
      setIsSyncing(true);
      setSyncStatus('Saving...');

      if (teamCode) {
        // Save to Firebase
        await saveNote(teamCode, noteToAdd);
        setSyncStatus('✓ Saved');
      } else {
        // Fall back to localStorage
        const updatedNotes = [noteToAdd, ...notes];
        localStorage.setItem('practiceNotes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
        setSyncStatus('✓ Saved locally');
      }

      setTimeout(() => setSyncStatus(''), 2000);

      // Reset form
      setNewNote({
        type: 'game',
        category: 'offense',
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0]
      });
      setIsAddingNote(false);
    } catch (error) {
      console.error('Error saving note:', error);
      setSyncStatus('⚠ Save failed');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDeleteNote = async (id) => {
    if (!confirm('Delete this note?')) return;

    try {
      setIsSyncing(true);
      setSyncStatus('Deleting...');

      if (teamCode) {
        // Delete from Firebase
        await deleteNote(teamCode, id);
        setSyncStatus('✓ Deleted');
      } else {
        // Delete from localStorage
        const updatedNotes = notes.filter(note => note.id !== id);
        localStorage.setItem('practiceNotes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
        setSyncStatus('✓ Deleted locally');
      }

      setTimeout(() => setSyncStatus(''), 2000);
    } catch (error) {
      console.error('Error deleting note:', error);
      setSyncStatus('⚠ Delete failed');
    } finally {
      setIsSyncing(false);
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
        <div className="header-with-sync">
          <div>
            <h1 className="page-title">Notes</h1>
            <p className="page-subtitle">
              {teamCode
                ? `Syncing with team: ${teamCode}`
                : 'Track game observations and practice insights'}
            </p>
          </div>
          {syncStatus && (
            <div className="sync-indicator">{syncStatus}</div>
          )}
        </div>
      </div>

      <button
        className="btn btn-primary add-note-btn"
        onClick={() => setIsAddingNote(!isAddingNote)}
        disabled={isSyncing}
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

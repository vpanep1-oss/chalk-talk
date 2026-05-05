import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore';
import { db } from './config';

// ==========================================
// PRACTICE PLANS
// ==========================================

/**
 * Save a custom practice plan
 * @param {string} teamCode - Team code for syncing
 * @param {object} plan - Practice plan object
 * @returns {Promise<void>}
 */
export const saveCustomPlan = async (teamCode, plan) => {
  if (!teamCode) {
    throw new Error('Team code is required');
  }

  const planRef = doc(db, 'teams', teamCode, 'customPlans', plan.id);
  await setDoc(planRef, {
    ...plan,
    updatedAt: serverTimestamp(),
    createdAt: plan.createdAt || serverTimestamp()
  });
};

/**
 * Get all custom plans for a team
 * @param {string} teamCode - Team code
 * @returns {Promise<Array>} Array of practice plans
 */
export const getCustomPlans = async (teamCode) => {
  if (!teamCode) return [];

  const plansRef = collection(db, 'teams', teamCode, 'customPlans');
  const q = query(plansRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

/**
 * Delete a custom plan
 * @param {string} teamCode - Team code
 * @param {string} planId - Plan ID to delete
 * @returns {Promise<void>}
 */
export const deleteCustomPlan = async (teamCode, planId) => {
  if (!teamCode || !planId) return;

  const planRef = doc(db, 'teams', teamCode, 'customPlans', planId);
  await deleteDoc(planRef);
};

/**
 * Subscribe to custom plans changes
 * @param {string} teamCode - Team code
 * @param {Function} callback - Callback function when data changes
 * @returns {Function} Unsubscribe function
 */
export const subscribeToCustomPlans = (teamCode, callback) => {
  if (!teamCode) return () => {};

  const plansRef = collection(db, 'teams', teamCode, 'customPlans');
  const q = query(plansRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const plans = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(plans);
  });
};

// ==========================================
// NOTES
// ==========================================

/**
 * Save a note
 * @param {string} teamCode - Team code for syncing
 * @param {object} note - Note object
 * @returns {Promise<void>}
 */
export const saveNote = async (teamCode, note) => {
  if (!teamCode) {
    throw new Error('Team code is required');
  }

  const noteRef = doc(db, 'teams', teamCode, 'notes', note.id.toString());
  await setDoc(noteRef, {
    ...note,
    updatedAt: serverTimestamp()
  });
};

/**
 * Get all notes for a team
 * @param {string} teamCode - Team code
 * @returns {Promise<Array>} Array of notes
 */
export const getNotes = async (teamCode) => {
  if (!teamCode) return [];

  const notesRef = collection(db, 'teams', teamCode, 'notes');
  const q = query(notesRef, orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

/**
 * Delete a note
 * @param {string} teamCode - Team code
 * @param {string} noteId - Note ID to delete
 * @returns {Promise<void>}
 */
export const deleteNote = async (teamCode, noteId) => {
  if (!teamCode || !noteId) return;

  const noteRef = doc(db, 'teams', teamCode, 'notes', noteId.toString());
  await deleteDoc(noteRef);
};

/**
 * Subscribe to notes changes
 * @param {string} teamCode - Team code
 * @param {Function} callback - Callback function when data changes
 * @returns {Function} Unsubscribe function
 */
export const subscribeToNotes = (teamCode, callback) => {
  if (!teamCode) return () => {};

  const notesRef = collection(db, 'teams', teamCode, 'notes');
  const q = query(notesRef, orderBy('timestamp', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const notes = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(notes);
  });
};

// ==========================================
// PRACTICE SCHEDULE
// ==========================================

/**
 * Save a scheduled practice entry
 * @param {string} teamCode
 * @param {object} entry
 */
export const savePracticeScheduleEntry = async (teamCode, entry) => {
  if (!teamCode) {
    throw new Error('Team code is required');
  }

  const scheduleRef = doc(db, 'teams', teamCode, 'practiceSchedule', entry.id.toString());
  await setDoc(scheduleRef, {
    ...entry,
    updatedAt: serverTimestamp(),
    date: entry.date
  });
};

export const getPracticeSchedule = async (teamCode) => {
  if (!teamCode) return [];

  const scheduleRef = collection(db, 'teams', teamCode, 'practiceSchedule');
  const q = query(scheduleRef, orderBy('date', 'asc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const deletePracticeScheduleEntry = async (teamCode, entryId) => {
  if (!teamCode || !entryId) return;

  const scheduleRef = doc(db, 'teams', teamCode, 'practiceSchedule', entryId.toString());
  await deleteDoc(scheduleRef);
};

export const subscribeToPracticeSchedule = (teamCode, callback) => {
  if (!teamCode) return () => {};

  const scheduleRef = collection(db, 'teams', teamCode, 'practiceSchedule');
  const q = query(scheduleRef, orderBy('date', 'asc'));

  return onSnapshot(q, (snapshot) => {
    const schedule = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(schedule);
  });
};

// ==========================================
// TEAM SETTINGS
// ==========================================

/**
 * Get team settings
 * @param {string} teamCode - Team code
 * @returns {Promise<object|null>} Team settings object
 */
export const getTeamSettings = async (teamCode) => {
  if (!teamCode) return null;

  const teamRef = doc(db, 'teams', teamCode);
  const teamDoc = await getDoc(teamRef);

  if (teamDoc.exists()) {
    return teamDoc.data();
  }

  // Initialize team settings if it doesn't exist
  const initialSettings = {
    teamCode,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    name: '',
    settings: {
      soundEnabled: true,
      hapticsEnabled: true
    }
  };

  await setDoc(teamRef, initialSettings);
  return initialSettings;
};

/**
 * Update team settings
 * @param {string} teamCode - Team code
 * @param {object} settings - Settings to update
 * @returns {Promise<void>}
 */
export const updateTeamSettings = async (teamCode, settings) => {
  if (!teamCode) return;

  const teamRef = doc(db, 'teams', teamCode);
  await updateDoc(teamRef, {
    ...settings,
    updatedAt: serverTimestamp()
  });
};

// ==========================================
// PRACTICE HISTORY
// ==========================================

/**
 * Save practice session history
 * @param {string} teamCode - Team code
 * @param {object} session - Practice session data
 * @returns {Promise<void>}
 */
export const savePracticeSession = async (teamCode, session) => {
  if (!teamCode) return;

  const sessionId = `session_${Date.now()}`;
  const sessionRef = doc(db, 'teams', teamCode, 'practiceHistory', sessionId);

  await setDoc(sessionRef, {
    ...session,
    timestamp: serverTimestamp()
  });
};

/**
 * Get practice history for a team
 * @param {string} teamCode - Team code
 * @param {number} limit - Number of sessions to retrieve
 * @returns {Promise<Array>} Array of practice sessions
 */
export const getPracticeHistory = async (teamCode, limit = 20) => {
  if (!teamCode) return [];

  const historyRef = collection(db, 'teams', teamCode, 'practiceHistory');
  const q = query(historyRef, orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.slice(0, limit).map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// ==========================================
// DRILL RATINGS
// ==========================================

/**
 * Save drill rating
 * @param {string} teamCode - Team code
 * @param {string} drillId - Drill ID
 * @param {number} rating - Rating (1-3 stars)
 * @param {string} sessionId - Practice session ID
 * @returns {Promise<void>}
 */
export const saveDrillRating = async (teamCode, drillId, rating, sessionId) => {
  if (!teamCode || !drillId) return;

  const ratingId = `${drillId}_${sessionId}`;
  const ratingRef = doc(db, 'teams', teamCode, 'drillRatings', ratingId);

  await setDoc(ratingRef, {
    drillId,
    rating,
    sessionId,
    timestamp: serverTimestamp()
  });
};

/**
 * Get drill ratings for a team
 * @param {string} teamCode - Team code
 * @param {string} drillId - Optional drill ID to filter
 * @returns {Promise<Array>} Array of drill ratings
 */
export const getDrillRatings = async (teamCode, drillId = null) => {
  if (!teamCode) return [];

  const ratingsRef = collection(db, 'teams', teamCode, 'drillRatings');
  let q;

  if (drillId) {
    q = query(ratingsRef, where('drillId', '==', drillId), orderBy('timestamp', 'desc'));
  } else {
    q = query(ratingsRef, orderBy('timestamp', 'desc'));
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Check if team code exists
 * @param {string} teamCode - Team code to check
 * @returns {Promise<boolean>}
 */
export const teamCodeExists = async (teamCode) => {
  if (!teamCode) return false;

  const teamRef = doc(db, 'teams', teamCode);
  const teamDoc = await getDoc(teamRef);

  return teamDoc.exists();
};

/**
 * Sync localStorage data to Firestore (migration helper)
 * @param {string} teamCode - Team code
 * @returns {Promise<void>}
 */
export const syncLocalDataToFirestore = async (teamCode) => {
  if (!teamCode) return;

  try {
    // Sync notes
    const localNotes = localStorage.getItem('practiceNotes');
    if (localNotes) {
      const notes = JSON.parse(localNotes);
      for (const note of notes) {
        await saveNote(teamCode, note);
      }
      console.log(`Synced ${notes.length} notes to Firestore`);
    }

    // Sync schedule entries
    const localSchedule = localStorage.getItem('practiceSchedule');
    if (localSchedule) {
      const scheduleEntries = JSON.parse(localSchedule);
      for (const entry of scheduleEntries) {
        await savePracticeScheduleEntry(teamCode, entry);
      }
      console.log(`Synced ${scheduleEntries.length} schedule entries to Firestore`);
    }

    // Sync practice history
    const localHistory = localStorage.getItem('practiceHistory');
    if (localHistory) {
      const sessions = JSON.parse(localHistory);
      for (const session of sessions) {
        await savePracticeSession(teamCode, session);
      }
      console.log(`Synced ${sessions.length} practice history sessions to Firestore`);
    }
  } catch (error) {
    console.error('Error syncing local data:', error);
  }
};

// ==========================================
// DRILL EFFECTIVENESS & RECOMMENDATIONS
// ==========================================

/**
 * Calculate drill effectiveness score (0-1) based on session ratings
 * @param {Array} sessions - Array of practice sessions
 * @param {string} drillId - Drill ID to analyze
 * @returns {number} Effectiveness score (0-1), or null if no ratings
 */
export const calculateDrillEffectiveness = (sessions, drillId) => {
  const sessionsWithDrill = sessions.filter(session =>
    session.drills?.some(d => d.drillId === drillId) && session.rating
  );

  if (sessionsWithDrill.length === 0) return null;

  const avgRating = sessionsWithDrill.reduce((sum, s) => sum + (s.rating || 0), 0) / sessionsWithDrill.length;
  return Math.min(1, avgRating / 5); // Normalize to 0-1 scale
};

/**
 * Get drill effectiveness scores for all drills
 * @param {Array} sessions - Array of practice sessions
 * @returns {Object} Map of drillId -> effectiveness score
 */
export const getDrillEffectivenessMap = (sessions) => {
  const drillIds = new Set();

  sessions.forEach(session => {
    session.drills?.forEach(drill => {
      drillIds.add(drill.drillId);
    });
  });

  const effectivenessMap = {};
  drillIds.forEach(drillId => {
    const effectiveness = calculateDrillEffectiveness(sessions, drillId);
    if (effectiveness !== null) {
      effectivenessMap[drillId] = effectiveness;
    }
  });

  return effectivenessMap;
};

/**
 * Get recommended next plan based on recent sessions and focus areas
 * @param {Array} sessions - Recent practice sessions
 * @param {Array} practicePlans - All available practice plans
 * @param {Array} notes - Game notes
 * @param {string} currentLevel - Current difficulty level
 * @returns {object} Recommended plan or null
 */
export const getRecommendedNextPlan = (sessions, practicePlans, notes, currentLevel = 'Beginner') => {
  if (!sessions.length || !practicePlans.length) return null;

  // Get focus areas from recent game notes
  const recentGameNotes = notes
    .filter(n => n.type === 'game')
    .sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date))
    .slice(0, 3);

  const neededFocusAreas = new Set(
    recentGameNotes.map(n => n.category).filter(Boolean)
  );

  // Get plans for current level that address needed focus areas
  const relevantPlans = practicePlans.filter(plan => {
    if (plan.level !== currentLevel) return false;
    if (neededFocusAreas.size === 0) return true;
    return plan.focusAreas.some(area =>
      Array.from(neededFocusAreas).some(focus =>
        area.toLowerCase().includes(focus.toLowerCase())
      )
    );
  });

  return relevantPlans.length > 0 ? relevantPlans[0] : null;
};

/**
 * Get low-rated drills to avoid in recommendations
 * @param {Array} sessions - Array of practice sessions
 * @param {number} threshold - Rating threshold (default 2.5/5)
 * @returns {Set} Set of low-rated drillIds
 */
export const getLowRatedDrills = (sessions, threshold = 2.5) => {
  const drillRatings = {};

  sessions.forEach(session => {
    if (!session.rating || !session.drills) return;

    session.drills.forEach(drill => {
      if (!drillRatings[drill.drillId]) {
        drillRatings[drill.drillId] = [];
      }
      drillRatings[drill.drillId].push(session.rating);
    });
  });

  const lowRatedDrills = new Set();
  Object.entries(drillRatings).forEach(([drillId, ratings]) => {
    const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    if (avgRating < threshold && ratings.length >= 2) {
      lowRatedDrills.add(drillId);
    }
  });

  return lowRatedDrills;
};

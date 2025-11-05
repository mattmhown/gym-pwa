// Workout data (first 14 days)
const workoutProgram = {
  day1: {
    name: 'Full-Body Strength',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 600, instruction: 'Welcome to Day 1 of your workout! Start with a brisk walk or light jog on the treadmill. Set the speed to a comfortable pace and keep a steady rhythm. Focus on warming up your body. You have 10 minutes—let’s go!' },
      { name: 'Dumbbell Bench Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Great job warming up! Time for strength training. First, grab two dumbbells and lie back on the adjustable bench. Push the dumbbells up, then lower them slowly. Perform 10 to 12 reps. Take a 60-second rest between each set. Let’s begin!' },
      { name: 'Dumbbell Goblet Squats', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Next up, goblet squats. Hold a dumbbell close to your chest. Stand tall, feet shoulder-width apart, and squat down, keeping your back straight. Perform 10 to 12 reps. Take a minute to rest between sets. Let’s go!' },
      { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'For dumbbell rows, hinge at the hips, keep your back straight, and pull the dumbbell towards your waist. Three sets of 10-12 reps. Rest 60 seconds between sets.' },
      { name: 'Dumbbell Deadlifts', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'For deadlifts, hold the dumbbells in front, lower to mid-shin, and stand up tall. Three sets of 10-12 reps. Rest 60 seconds between sets.' },
      { name: 'Cable Wood Chops', type: 'core', sets: 2, reps: '15 per side', restBetweenSets: 60, instruction: 'Finally, we’re finishing with core. Head to the cable machine and set it at mid-height. Grip the handle with both hands and twist your torso to one side. Slowly return to the start position. Do 15 reps per side, then switch. Two sets total. Great work today!' },
    ],
    closer: 'You crushed Day 1! Rest up, and I’ll see you tomorrow for cardio and core!',
  },
  day2: {
    name: 'Cardio and Core',
    exercises: [
      { name: 'Warm-Up Row', type: 'cardio', duration: 300, instruction: 'Welcome back! Start with a 5-minute row on the rowing machine. Set the resistance to a moderate level. Keep your strokes smooth and consistent. Let’s row!' },
      { name: 'Treadmill Intervals', type: 'cardio', duration: 600, instruction: 'Now, hop on the treadmill for intervals. Jog for 2 minutes, then walk for 1 minute. Repeat this cycle for a total of 10 minutes.' },
      { name: 'Rowing Sprints', type: 'cardio', duration: 600, instruction: 'Next, return to the rowing machine. Sprint for 1 minute, then row at a moderate pace for 2 minutes. Repeat this cycle for 10 minutes. Push yourself during those sprints!' },
      { name: 'Plank with Push to Flat', type: 'core', sets: 2, reps: '10 x 30 seconds', restBetweenSets: 60, instruction: 'Time for core. Get into a plank position, hold for 30 seconds, then push into a flat position like a push-up. Repeat this 10 times for two sets.' },
      { name: 'Kettlebell Swings', type: 'power', sets: 3, reps: '15', restBetweenSets: 60, instruction: 'Now, grab a kettlebell. Focus on your hip drive and perform 15 swings. Rest briefly between sets. Three sets total!' },
    ],
    closer: 'Another day done! Fantastic work. See you tomorrow for active recovery!',
  },
  day3: {
    name: 'River Walk',
    exercises: [
      { name: 'Recovery Walk', type: 'recovery', duration: 1800, instruction: 'Today is for active recovery. Go for a brisk 30 to 45-minute river walk. Keep a steady pace, enjoy the scenery, and let your body recover from the last two days of hard work. Have a great walk!' },
    ],
    closer: 'Great recovery day! See you tomorrow.',
  },
  day4: {
    name: 'Upper Body Focus',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 600, instruction: 'Start with a 10-minute walk or light jog on the treadmill. Let’s get your blood flowing for upper body day!' },
      { name: 'Dumbbell Shoulder Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Grab two dumbbells and take a seat on the balance ball. Press the weights overhead and lower them slowly. Perform 10 to 12 reps. Three sets total. Rest 60 seconds between sets.' },
      { name: 'Incline Dumbbell Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Set your bench to an incline. Grab your dumbbells and push them up, lowering them with control. Three sets of 10 to 12 reps.' },
      { name: 'Neutral Grip Dumbbell Bench Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Lie flat on the bench and hold the dumbbells in a neutral grip. Press them up and lower slowly. Three sets of 10 to 12 reps.' },
      { name: 'Dip Machine Leg Raises', type: 'core', sets: 2, reps: '15 each', restBetweenSets: 60, instruction: 'End with some core work. On the dip machine, raise your legs straight out in front of you for 15 reps. Then switch to bent knees for 15 reps. Two sets total.' },
    ],
    closer: 'Fantastic upper-body session! Rest up, and I’ll see you tomorrow for lower body.',
  },
  day5: {
    name: 'Lower Body Focus',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 300, instruction: 'Start with 5 minutes on the rowing machine to get your legs ready for today’s lower-body focus.' },
      { name: 'Split Squats', type: 'strength', sets: 3, reps: '10 per leg', restBetweenSets: 60, instruction: 'Perform split squats. One foot forward, one foot back. Lower your body until the back knee almost touches the ground. Do 10 reps per leg. Three sets total.' },
      { name: 'Glute Bridges', type: 'strength', sets: 3, reps: '15', restBetweenSets: 60, instruction: 'Lie on your back, feet flat, and drive your hips up. Squeeze your glutes at the top. Perform 15 reps. Rest briefly between sets.' },
      { name: 'Dumbbell Deadlifts', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Hold the dumbbells in front, lower to mid-shin, and stand up tall. Three sets of 10 to 12 reps.' },
    ],
    closer: 'Awesome lower-body session! Keep up the great work.',
  },
  day6: {
    name: 'Cardio & Core',
    exercises: [
      { name: 'Rowing Intervals', type: 'cardio', duration: 900, instruction: 'Start with 15 minutes of rowing intervals. Sprint for 1 minute, row at a moderate pace for 2 minutes, and repeat.' },
      { name: 'Kettlebell Swings', type: 'power', sets: 3, reps: '15', restBetweenSets: 60, instruction: 'Grab your kettlebell and perform 15 swings. Three sets total. Focus on explosive power from your hips.' },
      { name: 'Cable Wood Chops', type: 'core', sets: 2, reps: '15 per side', restBetweenSets: 60, instruction: 'Finish strong with core. Use the cable machine for wood chops, 15 reps per side. Two sets total.' },
    ],
    closer: 'Congratulations on completing the week! Rest well, and get ready for the next!',
  },
  day7: {
    name: 'Active Recovery – River Walk',
    exercises: [
      { name: 'Recovery Walk', type: 'recovery', duration: 1800, instruction: 'Take a brisk 30 to 45-minute walk outdoors. Enjoy the scenery, breathe deeply, and let your body recover from the week’s workouts. You’re doing amazing—rest well today!' },
    ],
    closer: 'Great recovery! On to Week 2.',
  },
  day8: {
    name: 'Full-Body Strength (Week 2)',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 600, instruction: 'Start with a 10-minute cycle on the stationary bike at a moderate pace. Focus on steady pedaling to warm up your legs and core.' },
      { name: 'Dumbbell Shoulder Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Seated on the bench, press the dumbbells overhead. Control the movement as you lower them back down. Rest 1 minute between sets.' },
      { name: 'Lat Pull-Down', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Using the lat pull-down machine, set the weight to a manageable load. Pull the bar to your chest, then slowly release. Rest 1 minute between sets.' },
      { name: 'Rubber Band Side Steps', type: 'strength', sets: 3, reps: '15 per side', restBetweenSets: 60, instruction: 'Place the band around your thighs. Step laterally, keeping tension in the band. Perform 15 reps per side. Rest briefly between sets.' },
      { name: 'Cable Wood Chops', type: 'core', sets: 2, reps: '15 per side', restBetweenSets: 60, instruction: 'Use the cable machine to perform wood chops. Twist your torso while keeping your core engaged. Two sets total.' },
    ],
    closer: 'You nailed it! Rest up and get ready for cardio tomorrow.',
  },
  day9: {
    name: 'Cardio and Core (Week 2)',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 300, instruction: 'Start with 5 minutes of light cycling on the stationary bike. Keep the resistance low and focus on steady pedaling.' },
      { name: 'Treadmill Intervals', type: 'cardio', duration: 900, instruction: 'Alternate 2 minutes of jogging with 1 minute of walking for 15 minutes.' },
      { name: 'Rowing Sprints', type: 'cardio', duration: 600, instruction: 'Sprint on the rowing machine for 1 minute, then row at a moderate pace for 2 minutes. Repeat for 10 minutes.' },
      { name: 'Plank with Shoulder Taps', type: 'core', sets: 2, reps: '10 x 30 seconds', restBetweenSets: 60, instruction: 'Hold a plank and alternate tapping each shoulder without twisting your hips. Rest briefly after each set.' },
    ],
    closer: 'Great session! You’re building both endurance and core strength—see you tomorrow.',
  },
  day10: {
    name: 'Upper Body Strength (Week 2)',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 600, instruction: 'Begin with 10 minutes on the rowing machine at a moderate pace to activate your upper body.' },
      { name: 'Incline Dumbbell Press', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Set your bench to an incline. Push the dumbbells up and lower them slowly.' },
      { name: 'Lat Pull-Down', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Focus on engaging your back muscles as you pull the bar down.' },
      { name: 'Chin-Up Machine', type: 'strength', sets: 3, reps: '6-8', restBetweenSets: 60, instruction: 'Use assistance if needed. Perform slow and controlled chin-ups.' },
      { name: 'Dip Machine Leg Raises', type: 'core', sets: 2, reps: '15 each', restBetweenSets: 60, instruction: 'Engage your core as you lift your legs straight out or bent at the knees.' },
    ],
    closer: 'Upper body strength is improving—keep it up!',
  },
  day11: {
    name: 'Lower Body Strength (Week 2)',
    exercises: [
      { name: 'Warm-Up', type: 'cardio', duration: 300, instruction: 'Warm up on the rowing machine for 5 minutes at a light pace.' },
      { name: 'Split Squats', type: 'strength', sets: 3, reps: '10 per leg', restBetweenSets: 60, instruction: 'Perform split squats. One foot forward, one foot back. Lower your body until the back knee almost touches the ground. Do 10 reps per leg. Three sets total.' },
      { name: 'Glute Bridges with Band', type: 'strength', sets: 3, reps: '15', restBetweenSets: 60, instruction: 'Add a resistance band around your thighs to increase difficulty.' },
      { name: 'Rubber Band Side Steps', type: 'strength', sets: 3, reps: '15 per side', restBetweenSets: 60, instruction: 'Place the band around your thighs. Step laterally, keeping tension in the band. Perform 15 reps per side.' },
      { name: 'Dumbbell Deadlifts', type: 'strength', sets: 3, reps: '10-12', restBetweenSets: 60, instruction: 'Hold the dumbbells in front, lower to mid-shin, and stand up tall. Three sets of 10 to 12 reps.' },
    ],
    closer: 'Your lower body is getting stronger every week—fantastic work!',
  },
  day12: {
    name: 'Cardio & Core (Week 2)',
    exercises: [
      { name: 'Rowing Intervals', type: 'cardio', duration: 900, instruction: 'Sprint for 1 minute, row at a moderate pace for 2 minutes. Repeat for 15 minutes.' },
      { name: 'Kettlebell Swings', type: 'power', sets: 3, reps: '15', restBetweenSets: 60, instruction: 'Grab your kettlebell and perform 15 swings. Three sets total. Focus on explosive power from your hips.' },
      { name: 'Plank with Shoulder Taps', type: 'core', sets: 2, reps: '10 x 30 seconds', restBetweenSets: 60, instruction: 'Hold a plank and alternate tapping each shoulder without twisting your hips. Rest briefly after each set.' },
    ],
    closer: 'Fantastic way to end the week—rest day tomorrow!',
  },
  day13: {
    name: 'Active Recovery – Yoga and Stretching (Week 2)',
    exercises: [
      { name: 'Yoga Stretches', type: 'recovery', duration: 1200, instruction: 'Spend 20 to 30 minutes on yoga stretches. Focus on flexibility and balance. Use your mat and follow a guided routine for best results.' },
    ],
    closer: 'Great recovery! On to next week.',
  },
  day14: {
    name: 'Full-Body Strength (Repeat Day 1 for Week 2 End)',
    exercises: workoutProgram.day1.exercises, // Repeat Day 1 structure
    closer: workoutProgram.day1.closer,
  },
};

let currentDay = 'day1';
let currentExerciseIndex = 0;
let currentSet = 1;
let isWorkoutActive = false;
let timeRemaining = 0;
let isResting = false;
let voiceEnabled = true;
let voiceSpeed = 1.0;
let selectedVoice = null;
let availableVoices = [];
let useHighQualityTTS = false;
let apiKey = '';
let timerId = null;
let utteranceQueue = [];
const synth = window.speechSynthesis;

// Browser detection
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Preprocess text
function preprocessText(text) {
  text = text.replace(/do not/g, "don't").replace(/read/g, "reed");
  const words = text.split(' ');
  let processed = [];
  for (let i = 0; i < words.length; i += 12) {
    processed.push(words.slice(i, i + 12).join(' ') + '...');
  }
  return processed.join(' ').replace(/([.!?])\s*/g, '$1 ');
}

// Add SSML
function addSSML(text) {
  if (isSafari) {
    return text.replace(/<break time="\d+ms"\/>/g, '... ');
  }
  return `<speak>${text.replace(/(\.|\?|\!)/g, '.<break time="300ms"/>')}</speak>`;
}

// High-quality TTS
async function speakHighQuality(text) {
  if (!apiKey) {
    speakFallback(text);
    return;
  }
  try {
    const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: 'en-US', name: 'en-US-Neural2-F' },
        audioConfig: { audioEncoding: 'MP3' }
      })
    });
    const data = await response.json();
    const audioBlob = new Blob([Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))], { type: 'audio/mp3' });
    const audio = new Audio(URL.createObjectURL(audioBlob));
    audio.play();
  } catch (e) {
    speakFallback(text);
  }
}

// Fallback speak
function speakFallback(text, isCountdown = false, isMotivational = false) {
  const processed = addSSML(preprocessText(text));
  utteranceQueue = processed.split('...').filter(chunk => chunk.trim());
  speakNextChunk(isCountdown, isMotivational);
}

// Speak next chunk
function speakNextChunk(isCountdown, isMotivational) {
  if (utteranceQueue.length === 0) return;
  const chunk = utteranceQueue.shift();
  const utterance = new SpeechSynthesisUtterance(chunk);
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.rate = isCountdown ? 0.9 : voiceSpeed;
  utterance.pitch = isMotivational ? 1.2 : 1.0;
  utterance.volume = isMotivational ? 0.9 : 1.0;
  utterance.onend = () => setTimeout(() => speakNextChunk(isCountdown, isMotivational), 200);
  synth.speak(utterance);
}

// Main speak function
function speak(text, isCountdown = false, isMotivational = false) {
  if (!voiceEnabled) return;
  synth.cancel();
  if (useHighQualityTTS) {
    speakHighQuality(text);
  } else {
    speakFallback(text, isCountdown, isMotivational);
  }
}

// Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Load voices
function loadVoices() {
  availableVoices = synth.getVoices();
  const voiceSelect = document.getElementById('voice-select');
  voiceSelect.innerHTML = '';
  availableVoices.filter(v => v.lang.includes('en')).forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  selectedVoice = availableVoices.find(v => v.name.includes('Daniel') || v.lang.includes('en-GB')) || availableVoices[0];
  voiceSelect.value = selectedVoice ? selectedVoice.name : '';
}

synth.onvoiceschanged = loadVoices;
loadVoices();

// Load days
function loadDays() {
  const daySelect = document.getElementById('day-select');
  daySelect.innerHTML = '';
  Object.keys(workoutProgram).forEach(day => {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = `${day.toUpperCase()}: ${workoutProgram[day].name}`;
    daySelect.appendChild(option);
  });
  daySelect.value = currentDay;
}

// Update UI
function updateUI() {
  const workout = workoutProgram[currentDay];
  const exercise = workout.exercises[currentExerciseIndex];

  document.getElementById('workout-name').textContent = workout.name;
  document.getElementById('exercise-name').textContent = exercise.name;
  const typeSpan = document.getElementById('exercise-type');
  typeSpan.textContent = exercise.type.toUpperCase();
  typeSpan.className = exercise.type;

  const repsP = document.getElementById('exercise-reps');
  repsP.innerHTML = exercise.reps ? `<span class="purple">Reps:</span> ${exercise.reps}` : '';
  const durationP = document.getElementById('exercise-duration');
  durationP.innerHTML = exercise.duration ? `<span class="purple">Duration:</span> ${formatTime(exercise.duration)}` : '';

  const timerDiv = document.getElementById('timer-display');
  timerDiv.classList.toggle('hidden', timeRemaining === 0);
  document.getElementById('timer-time').textContent = formatTime(timeRemaining);
  document.getElementById('rest-indicator').classList.toggle('hidden', !isResting);

  document.getElementById('start-btn').classList.toggle('hidden', isWorkoutActive || timeRemaining > 0);
  const prBtn = document.getElementById('pause-resume-btn');
  prBtn.classList.toggle('hidden', !isWorkoutActive && timeRemaining === 0);
  prBtn.textContent = isWorkoutActive ? '⏸️ Pause' : '▶️ Resume';
  document.getElementById('next-btn').classList.toggle('hidden', !isWorkoutActive && timeRemaining === 0);

  const ul = document.getElementById('exercises-ul');
  ul.innerHTML = '';
  workout.exercises.forEach((ex, idx) => {
    const li = document.createElement('li');
    li.textContent = `${ex.name} ${ex.duration ? formatTime(ex.duration) : ex.sets ? `${ex.sets} sets` : ''}`;
    li.className = idx < currentExerciseIndex ? 'completed' : idx === currentExerciseIndex ? 'current' : 'pending';
    ul.appendChild(li);
  });
}

// Start exercise
function startExercise() {
  const exercise = workoutProgram[currentDay].exercises[currentExerciseIndex];
  speak(exercise.instruction);
  if (exercise.duration) {
    timeRemaining = exercise.duration;
    isWorkoutActive = true;
    startTimer();
  } else {
    isWorkoutActive = true;
  }
  updateUI();
}

// Start timer
function startTimer() {
  timerId = setInterval(() => {
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(timerId);
      handleExerciseComplete();
    }
    if (timeRemaining === 10) speak('10 seconds remaining', true);
    if (timeRemaining === 3) speak('3, 2, 1', true);
    updateUI();
  }, 1000);
}

// Handle complete
function handleExerciseComplete() {
  const exercise = workoutProgram[currentDay].exercises[currentExerciseIndex];
  if (exercise.sets && currentSet < exercise.sets) {
    isResting = true;
    timeRemaining = exercise.restBetweenSets;
    speak(`Set ${currentSet} complete. Rest for ${exercise.restBetweenSets} seconds.`);
    startTimer();
  } else {
    speak('Exercise complete! Great job!');
    isWorkoutActive = false;
    updateUI();
  }
}

// Next exercise
function nextExercise() {
  clearInterval(timerId);
  synth.cancel();
  const workout = workoutProgram[currentDay];
  if (currentExerciseIndex < workout.exercises.length - 1) {
    currentExerciseIndex++;
    currentSet = 1;
    isWorkoutActive = false;
    isResting = false;
    timeRemaining = 0;
  } else {
    speak(workout.closer, false, true);
    isWorkoutActive = false;
    currentExerciseIndex = 0;
    currentSet = 1;
  }
  updateUI();
}

// Toggle pause
function togglePause() {
  if (isWorkoutActive) {
    clearInterval(timerId);
    synth.cancel();
    isWorkoutActive = false;
  } else {
    if (timeRemaining > 0) {
      startTimer();
    } else {
      startExercise();
    }
    isWorkoutActive = true;
  }
  updateUI();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadDays();
  updateUI();

  document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('settings-panel').classList.toggle('hidden');
  });

  document.getElementById('voice-enabled').addEventListener('change', (e) => {
    voiceEnabled = e.target.checked;
  });

  document.getElementById('voice-speed').addEventListener('input', (e) => {
    voiceSpeed = parseFloat(e.target.value);
    document.getElementById('voice-speed-value').textContent = `${voiceSpeed.toFixed(1)}x`;
  });

  document.getElementById('voice-select').addEventListener('change', (e) => {
    selectedVoice = availableVoices.find(v => v.name === e.target.value);
  });

  document.getElementById('use-high-quality').addEventListener('change', (e) => {
    useHighQualityTTS = e.target.checked;
    document.getElementById('api-key').classList.toggle('hidden', !useHighQualityTTS);
  });

  document.getElementById('api-key').addEventListener('input', (e) => {
    apiKey = e.target.value;
  });

  document.getElementById('day-select').addEventListener('change', (e) => {
    currentDay = e.target.value;
    currentExerciseIndex = 0;
    currentSet = 1;
    isWorkoutActive = false;
    updateUI();
  });

  document.getElementById('start-btn').addEventListener('click', startExercise);
  document.getElementById('pause-resume-btn').addEventListener('click', togglePause);
  document.getElementById('next-btn').addEventListener('click', nextExercise);
});

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(reg => {
      console.log('SW registered');
    }).catch(err => {
      console.log('SW registration failed: ', err);
    });
  });
}

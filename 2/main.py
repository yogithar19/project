from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    # Redirect to the music player route (e.g., '/music-player')
    return redirect(url_for('music_player'))

@app.route('/music-player')
def music_player():
    return render_template('index.html')

# Serve your style.css and main.js files under the /static/ route
@app.route('/style.css')
def serve_css():
    return app.send_static_file('style.css')

@app.route('/main.js')
def serve_js():
    return app.send_static_file('main.js')
music_dir = "static/music"  # Path to your "music" directory

@app.route('/play/<song>')
def play_song(song):
    song_path = os.path.join(music_dir, song)
    return send_file(song_path, as_attachment=False)

if __name__ == '__main__':
    app.run(debug=True)


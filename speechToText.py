import whisper
import ffmpeg

input_file = "./audio/audio.ogg"
output_file = "./audio/audio.mp4"

# Ruta completa del ejecutable de FFmpeg
ffmpeg_exec = r"C:\ffmpeg\bin\ffmpeg.exe"

# Convierte el archivo de audio OGG a MP4
(
    ffmpeg
    .input(input_file)
    .output(output_file)
    .overwrite_output()
    .run(cmd=ffmpeg_exec)
)
model = whisper.load_model("base")
transcription = model.transcribe(output_file)
print(transcription["text"])
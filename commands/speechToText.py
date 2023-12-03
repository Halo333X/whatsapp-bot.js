import openai
import ffmpeg
import json

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
openai.api_key = ("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")
audio_file = open("./audio/audio.mp4", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)

transcription_str = transcript['text']



# Imprime la transcripción en la salida estándar
print(transcription_str)
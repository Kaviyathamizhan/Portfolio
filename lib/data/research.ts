import { Research } from '@/types'

export const researchData: Research[] = [
  {
    id: 'aedsp-pruning',
    title: 'AEDSP — Adaptive Energy-Driven Structured Pruning Framework',
    problem:
      'Deep neural networks like ResNet-18, VGG-16, and MobileNetV2 exceed the thermal, memory, and energy budgets of resource-constrained edge devices.',
    motivation:
      'Enabling continuous, real-time AI inference on edge hardware without battery drain or thermal throttling requires physical energy optimization beyond simple parameter counting.',
    researchGap:
      'Existing structured pruning techniques optimize purely for theoretical FLOP reduction or parameter counts, failing to account for real-world hardware energy dissipation and latency sensitivity curves.',
    solution:
      'A multi-objective adaptive structured pruning framework coupled with a knowledge-distillation recovery engine and automated ONNX runtime deployment benchmarking.',
    methodology:
      'Profiled hardware sensitivity curves across CIFAR-10 architectures. Formulated a multi-objective scoring engine balancing energy cost, inference latency, and accuracy loss, followed by teacher-student knowledge distillation recovery.',
    results:
      'Achieved 59% total model compression and >50% FLOPs reduction across ResNet-18, MobileNetV2, and VGG-16 with negligible inference accuracy degradation.',
    futureWork:
      'Extending adaptive energy-driven pruning algorithms to multi-billion parameter quantized Transformer models and LLMs on edge hardware.',
    metrics: [
      {
        label: 'Compression',
        value: '59%',
        description: 'Total parameter size reduction',
      },
      {
        label: 'FLOPs Saving',
        value: '50%+',
        description: 'Reduction in computational operations',
      },
    ],
    stack: [
      'PyTorch',
      'ONNX Runtime',
      'Knowledge Distillation',
      'ResNet-18',
      'MobileNetV2',
      'VGG-16',
    ],
    image: '/images/research/aedsp.png',
    github: 'https://github.com/Kaviyathamizhan',
    featured: true,
  },
  {
    id: 'crisisgrid-rl',
    title:
      'CrisisGrid — Multi-Agent Disaster Response Intelligence System via GRPO',
    problem:
      'Disaster management requires coordinating complex, long-horizon logistics decisions under severe uncertainty where single-agent LLM systems degrade or hallucinate.',
    motivation:
      'Providing emergency response commanders with reliable autonomous agent teams capable of real-time tool-use, multi-step planning, and spatial memory.',
    researchGap:
      'Standard LLM agent architectures lack formal mathematical reward alignment for long-horizon multi-agent cooperation, leading to reward hacking and cascading decision failures.',
    solution:
      'An autonomous multi-agent intelligence system featuring tool-use, dynamic planning, and shared memory, fine-tuned on Qwen 1.5B using Group Relative Policy Optimization (GRPO) with LoRA adaptation.',
    methodology:
      'Implemented a rigorous reward engineering and evaluation framework. Investigated reward-alignment challenges in long-horizon decision making and tracked multi-agent convergence using Weights & Biases.',
    results:
      'Demonstrated robust autonomous agent recovery and task completion in simulated disaster environments with structured JSON tool execution and zero catastrophic divergence.',
    futureWork:
      'Integrating live GIS telemetry and multi-modal satellite imagery directly into the GRPO reward function and tool definitions.',
    metrics: [
      {
        label: 'Backbone',
        value: 'Qwen 1.5B',
        description: 'Fine-tuned via LoRA & GRPO',
      },
      {
        label: 'Algorithm',
        value: 'GRPO',
        description: 'Group Relative Policy Optimization',
      },
    ],
    stack: [
      'Python',
      'PyTorch',
      'Reinforcement Learning',
      'LoRA',
      'Qwen 1.5B',
      'Hugging Face',
      'Weights & Biases',
    ],
    image: '/images/research/crisisgrid.png',
    github: 'https://github.com/Kaviyathamizhan',
    featured: true,
  },
]

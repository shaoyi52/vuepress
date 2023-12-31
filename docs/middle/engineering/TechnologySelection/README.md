---
sidebar: auto
---
# 技术选型

虽然实际工作中的技术选型难免掺杂团队或个人的喜好，但相对于项目规范和编码规范而言，技术选型的某些标准是可量化的。比如开源工具npms-analyzer从质量、维护频率、流行度和作者4个角度评定一个开源框架/工具的综合表现。在以上4个指标的基础上在细化一下，扩展为功能、性能、稳定性、生态、学习曲线、作者和社区等7项指标。

## 功能

功能是技术选型最基本的指标。评定一个框架/工具的功能不仅要看它是否能满足现阶段产品的需求，还需要考虑其是否能满足在可预见的后续版本中可能增加的新需求。在满足以上两点的前提下，功能的具体实现模式、API的简捷性也是影响选型的重要因素。这样做的目的是减少系统中第三发库的数量和使用库的人力成本。

## 性能

性能的好坏直接影响用户体验，良好的用户体验对产品的竞争力也是不可或缺的。作为支撑业务的技术选型，一个框架/工具自身的性能是至关重要的。包括体积大小、计算能力、响应速度。

## 稳定性

可能每个前端开发者都或多或少地遇到过由第三方框架/工具自身bug引起的逻辑问题或安全事故，一旦发生这类问题，自行修改框架源码是最快捷的解决方案，这个过程非常痛苦。在技术选型阶段应尽量将此类隐患控制在最低的程度。稳定性是决定一个框架/工具是否可作为基础技术选型的重要指标。

## 生态

一个框架/工具的生态系统分为两部分：一是与其组合为完整系统的扩展插件或框架，二是其开发和调试工具的丰富性。两个子生态系统一个针对的是应用架构，一个针对的是工程体系，换句话说，基础的技术选型必须有益于架构的高可用和可伸缩，并且能够高效地辅助工程体系的实施。

## 学习曲线

平缓的学习曲线能够令团队成员以相对较快的速度接纳和理解新技术，进而在开发中能够深入发挥框架/工具的优势。

## 作者

虽然可能有失偏颇，但总体而言相对个人项目，知名公司和团队制作的框架/工具的品质更高，稳定性也更有保障。

## 社区

社区的活跃度能够反映项目的受欢迎程度，一个框架/工具被更多人使用和讨论也有助于问题的解决。在一个庞大的社区内，你遇到的问题有很大概率已经被前行者解决了。

## 开源协议

开源协议并非是决定技术选型的硬性指标，但在开源社区如此活跃的今天，在使用开源软件之前务必仔细研究其许可协议。React的“协议门”对开源社区是一个警醒，各公司和技术团队对待开源软件的态度也更加谨慎。
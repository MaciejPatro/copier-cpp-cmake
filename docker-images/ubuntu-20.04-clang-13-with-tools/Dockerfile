FROM ubuntu:20.04

MAINTAINER Maciej Patro maciejpatro@gmail.com
LABEL description="Package which provides the tooling to build with clang-13."

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y ca-certificates
RUN echo "deb [trusted=yes] http://apt.llvm.org/focal/ llvm-toolchain-focal-13 main" | tee /etc/apt/sources.list.d/clang.list

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        build-essential \
		git \
		llvm-13 \
		clang-13 \
		lld-13 \
		libc++-13-dev \
		libc++abi-13-dev \
		llvm-13-dev \
		libclang-13-dev \
		python3 \
		python3-pip \
		curl \
		zip \
		unzip \
		git \
		tar && \
	rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --upgrade pip

RUN pip3 install --no-cache-dir \
		'cmake>=3.23' \
		'conan>=1.40.3' \
		ninja \
		gcovr

RUN update-alternatives --install /usr/bin/clang clang /usr/bin/clang-13 100 && \
	update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-13 100 && \
	update-alternatives --install /usr/bin/llvm-cov llvm-cov /usr/bin/llvm-cov-13 100

ENV IWYU /home/iwyu
ENV IWYU_BUILD ${IWYU}/build
ENV IWYU_SRC ${IWYU}/include-what-you-use

RUN git clone --branch clang_13 \
		https://github.com/include-what-you-use/include-what-you-use.git \
		${IWYU_SRC}

RUN cmake -G Ninja -DCMAKE_PREFIX_PATH=/usr/lib/llvm-13 -S ${IWYU_SRC} -B ${IWYU_BUILD} && \
	cmake --build ${IWYU_BUILD} -j && \
	cmake --install ${IWYU_BUILD}

RUN mkdir -p $(include-what-you-use -print-resource-dir 2>/dev/null)
RUN ln -s $(readlink -f /usr/lib/clang/13/include) \
	$(include-what-you-use -print-resource-dir 2>/dev/null)/include

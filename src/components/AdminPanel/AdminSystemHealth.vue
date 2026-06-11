<template>
    <div class="bg-white border border-[#e8e8e8] rounded-lg">
        <div class="p-6 border-b border-[#e8e8e8]">
            <h2 class="text-[18px] text-[#0f172a]">Status do Sistema</h2>
        </div>
        <div class="p-6">
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span class="text-[14px] text-[#0f172a]">{system.name}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[13px] text-[#64748b]">system: {system.system}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span class="text-[14px] text-[#0f172a]">{system.name}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[13px] text-[#64748b]">system: {system.system}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span class="text-[14px] text-[#0f172a]">{system.name}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[13px] text-[#64748b]">system: {system.system}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span class="text-[14px] text-[#0f172a]">{system.name}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[13px] text-[#64748b]">system: {system.system}</span>
                    </div>
                </div>
            </div>

            <div class="mt-6 pt-6 border-t border-[#e8e8e8]">
                <button
                    class="w-full py-2.5 bg-[#f8fafc] text-[#0f172a] text-[14px] border border-[#e2e8f0] hover:bg-[#f1f5f9] transition-colors">
                    Ver relatório completo
                </button>
            </div>
        </div>
    </div>
</template>
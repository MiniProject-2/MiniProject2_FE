import React, { useState } from 'react';
import * as S from '@/styles/overview.styles';
import { Tabs, TabList } from '@chakra-ui/react';
import { useOverViewState } from '@/store/overViewStore';
import { OverViewProps, TaskOverviewProps } from '@/type/componentProps';
import { TabSkeletons, DateSkeletons } from '@/components/Skeleton';

function Header({ date, content, isLoading, totalCount, todoCount, inProgressCount, doneCount }: OverViewProps) {
  const { setDisplayedData, setSelectedProgress, getSelectedProgress } = useOverViewState();

  // 탭 클릭 시 필터링
  const handleTabClick = (progress: string) => {
    setSelectedProgress(progress);
    const filteredData =
      progress === 'All' ? content : content.filter((event: TaskOverviewProps) => event.progress === progress);
    setDisplayedData(filteredData);
  };

  return (
    <S.OverViewHeader>
      <S.OverViewDate>
        {isLoading ? <DateSkeletons /> : <>{Array.isArray(date) ? `${date[0]} ~ ${date[1]}` : date}</>}
      </S.OverViewDate>
      <S.OverViewSorted>
        <Tabs variant="soft-rounded">
          <TabList>
            {isLoading ? (
              <TabSkeletons />
            ) : (
              <>
                {['All', 'TODO', 'IN_PROGRESS', 'DONE'].map((progress) => (
                  <S.OverViewTab
                    key={progress}
                    onClick={() => handleTabClick(progress)}
                    aria-selected={getSelectedProgress() === progress}
                  >
                    {progress}
                    <S.IndexCount>
                      {progress === 'All'
                        ? totalCount || 0
                        : progress === 'TODO'
                        ? todoCount || 0
                        : progress === 'IN_PROGRESS'
                        ? inProgressCount || 0
                        : doneCount || 0}
                    </S.IndexCount>
                  </S.OverViewTab>
                ))}
              </>
            )}
          </TabList>
        </Tabs>
      </S.OverViewSorted>
    </S.OverViewHeader>
  );
}

export default Header;

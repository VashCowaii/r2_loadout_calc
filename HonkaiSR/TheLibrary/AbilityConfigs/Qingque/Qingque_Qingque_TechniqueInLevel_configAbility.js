const configAbility = {
  "fileName": "Qingque_Qingque_TechniqueInLevel",
  "childAbilityList": [
    "Qingque_Qingque_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "2"
      },
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
          "valuePerStack": {
            "AbilityRank_Eidolon2_P1_SPAdd": {
              "displayLines": "1"
            }
          }
        }
      ]
    },
    "Refresh QingQue Bar-State"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}
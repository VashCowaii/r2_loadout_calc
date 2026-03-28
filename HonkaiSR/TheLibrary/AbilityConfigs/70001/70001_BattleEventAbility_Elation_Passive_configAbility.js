const configAbility = {
  "fileName": "70001_BattleEventAbility_Elation_Passive",
  "childAbilityList": [
    "70001_Activity_ElationBattle_BEStart_ForShowOnly",
    "70001_BattleEventAbility_Elation_Passive"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"112407337\">MBattleEvent_Elation_Passive</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}